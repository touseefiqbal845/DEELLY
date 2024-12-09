import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapWithClusters = () => {
  const mapContainerRef = useRef(null);

  const MAPBOX_ACCESS_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN";

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.209, 28.613], 
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    const fetchDataAndAddToMap = async () => {
      try {
        const response = await fetch("https://deelly.com/api/nearby_deals/");
        const data = await response.json();

        const geoData = {
          type: "FeatureCollection",
          features: data.deals.map((deal) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [deal.longitude, deal.latitude],
            },
            properties: {
              name: deal.name,
              description: deal.description,
              icon: deal.iconUrl || "/location.png", 
            },
          })),
        };

        map.addSource("deals", {
          type: "geojson",
          data: geoData,
          cluster: true,
          clusterMaxZoom: 14, 
          clusterRadius: 50, 
        });

        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "deals",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#51bbd6",
              10,
              "#f1f075",
              30,
              "#f28cb1",
            ],
            "circle-radius": ["step", ["get", "point_count"], 15, 10, 20, 30, 25],
          },
        });

        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "deals",
          filter: ["has", "point_count"],
          layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 12,
          },
        });

        map.addLayer({
          id: "unclustered-point",
          type: "symbol",
          source: "deals",
          filter: ["!", ["has", "point_count"]],
          layout: {
            "icon-image": "custom-marker", 
            "icon-size": 0.5,
          },
        });

        map.loadImage("location.png", (error, image) => {
          if (error) throw error;
          map.addImage("custom-marker", image);
        });

        map.on("click", "unclustered-point", (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { name, description } = e.features[0].properties;

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
                <>
                <strong>${name}</strong><p>${description}</p>
                </>
            )
            .addTo(map);
        });

        map.on("click", "clusters", (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          });
          const clusterId = features[0].properties.cluster_id;
          map
            .getSource("deals")
            .getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) return;
              map.easeTo({
                center: features[0].geometry.coordinates,
                zoom,
              });
            });
        });

        map.on("mouseenter", "clusters", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", () => {
          map.getCanvas().style.cursor = "";
        });
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchDataAndAddToMap();

    return () => map.remove();
  }, [MAPBOX_ACCESS_TOKEN]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "600px" }}
    ></div>
  );
};

export default MapWithClusters; 