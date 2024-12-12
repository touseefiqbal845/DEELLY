import React,{useState} from "react";
import Rating from "react-rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "../../Customize/Button";

const Card = () => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsPopoverVisible(!isPopoverVisible);
  };


  return (
    <>
    <div className="p-14">
    <div className="p-14">
    <h1 className="text-6xl not-italic font-bold ">
 Nearby
  <span className="text-Deals text-green-400 mx-2">
    Deals
  </span>
</h1>
     
    </div>

              <div className="flex ">
     

     <div className="max-w-sm w-1/3 mx-auto border rounded-xl shadow-md bg-white">
        <div className="relative">
          <img
            src="https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
            alt="Loaded Fries"
            className="w-full h-48 object-cover rounded-xl"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>

          {isPopoverVisible && (
            <div className="absolute top-12 right-2 bg-white border rounded-lg shadow-lg p-4 w-56 z-10">
              <p className="text-sm font-medium text-gray-700">
                All available locations:
              </p>
              <ul className="mt-2 text-gray-600">
              <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Karachi</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Islamabad</p>
        </div>
                
              </ul>
            </div>
          )}
        </div>

      <div className="p-4">
      
        <div className="flex justify-between items-center mt-0">
        <div className="flex items-center mb-2">
          <Rating
            initialRating={4} 
            emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
            fullSymbol={<span className="text-yellow-400 text-2xl">★</span>}
            readonly
          />
        </div>
        <div className="flex ">
        <CiLocationOn style={{ color: "green" ,marginRight:"2px",marginTop:"2px"}} />

        <span className="text-sm font-medium text-green-500">Flat 15% Off</span>

        </div>
         
        </div>
        <h3 className="text-lg font-bold">Loaded Fries At Aloo Cart</h3>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />


          <p>Pakistan, Lahore</p>
          <span className="ml-2 text-blue-500">+2 more</span>
        </div>

       
      </div>

      <div className="flex items-center px-4 py-3 border-t">
        
      </div>

      <div className="flex justify-between items-center mt-0 p-4">
        <div className="flex justify-between items-center ">
        <img
          src="https://gravatar.com/avatar/26f2f503d85008b47318fb7764ed72fe?s=400&d=robohash&r=x"
          alt="Aloo Cart"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-medium text-sm">William</span>
        </div>
        <CustomButton 
        text = "Get offer"
        bgColor = "bg-[#219653]"
        textColor = "text-white"
        borderColor = "#013D29"
        textSize = "text-sm"
        padding = "px-4 py-2"
        borderRadius = "rounded-full"
        onClick={""} 
      />
    
        </div>

        
   
   
    </div>  
    <div className="max-w-sm w-1/3 mx-auto border rounded-xl shadow-md bg-white">
        <div className="relative">
          <img
            src="https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
            alt="Loaded Fries"
            className="w-full h-48 object-cover rounded-xl"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>

          {isPopoverVisible && (
            <div className="absolute top-12 right-2 bg-white border rounded-lg shadow-lg p-4 w-56 z-10">
              <p className="text-sm font-medium text-gray-700">
                All available locations:
              </p>
              <ul className="mt-2 text-gray-600">
              <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Karachi</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Islamabad</p>
        </div>
                
              </ul>
            </div>
          )}
        </div>

      <div className="p-4">
      
        <div className="flex justify-between items-center mt-0">
        <div className="flex items-center mb-2">
          <Rating
            initialRating={4} 
            emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
            fullSymbol={<span className="text-yellow-400 text-2xl">★</span>}
            readonly
          />
        </div>
        <div className="flex ">
        <CiLocationOn style={{ color: "green" ,marginRight:"2px",marginTop:"2px"}} />

        <span className="text-sm font-medium text-green-500">Flat 15% Off</span>

        </div>
         
        </div>
        <h3 className="text-lg font-bold">Loaded Fries At Aloo Cart</h3>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />


          <p>Pakistan, Lahore</p>
          <span className="ml-2 text-blue-500">+2 more</span>
        </div>

       
      </div>

      <div className="flex items-center px-4 py-3 border-t">
        
      </div>

      <div className="flex justify-between items-center mt-0 p-4">
        <div className="flex justify-between items-center ">
        <img
          src="https://gravatar.com/avatar/26f2f503d85008b47318fb7764ed72fe?s=400&d=robohash&r=x"
          alt="Aloo Cart"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-medium text-sm">William</span>
        </div>
        <CustomButton 
        text = "Get offer"
        bgColor = "bg-[#219653]"
        textColor = "text-white"
        borderColor = "#013D29"
        textSize = "text-sm"
        padding = "px-4 py-2"
        borderRadius = "rounded-full"
        onClick={""} 
      />
    
        </div>

        
   
   
    </div>    <div className="max-w-sm w-1/3 mx-auto border rounded-xl shadow-md bg-white">
        <div className="relative">
          <img
            src="https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
            alt="Loaded Fries"
            className="w-full h-48 object-cover rounded-xl"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>

          {isPopoverVisible && (
            <div className="absolute top-12 right-2 bg-white border rounded-lg shadow-lg p-4 w-56 z-10">
              <p className="text-sm font-medium text-gray-700">
                All available locations:
              </p>
              <ul className="mt-2 text-gray-600">
              <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Karachi</p>
        </div> <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Islamabad</p>
        </div>
                
              </ul>
            </div>
          )}
        </div>

      <div className="p-4">
      
        <div className="flex justify-between items-center mt-0">
        <div className="flex items-center mb-2">
          <Rating
            initialRating={4} 
            emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
            fullSymbol={<span className="text-yellow-400 text-2xl">★</span>}
            readonly
          />
        </div>
        <div className="flex ">
        <CiLocationOn style={{ color: "green" ,marginRight:"2px",marginTop:"2px"}} />

        <span className="text-sm font-medium text-green-500">Flat 15% Off</span>

        </div>
         
        </div>
        <h3 className="text-lg font-bold">Loaded Fries At Aloo Cart</h3>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />

          <p>Pakistan, Lahore</p>
        </div>
        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
        <CiLocationOn style={{ color: "green" }} />


          <p>Pakistan, Lahore</p>
          <span className="ml-2 text-blue-500">+2 more</span>
        </div>

       
      </div>

      <div className="flex items-center px-4 py-3 border-t">
        
      </div>

      <div className="flex justify-between items-center mt-0 p-4">
        <div className="flex justify-between items-center ">
        <img
          src="https://gravatar.com/avatar/26f2f503d85008b47318fb7764ed72fe?s=400&d=robohash&r=x"
          alt="Aloo Cart"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-medium text-sm">William</span>
        </div>
        <CustomButton 
        text = "Get offer"
        bgColor = "bg-[#219653]"
        textColor = "text-white"
        borderColor = "#013D29"
        textSize = "text-sm"
        padding = "px-4 py-2"
        borderRadius = "rounded-full"
        onClick={""} 
      />
    
        </div>

        
   
   
    </div>  
    </div>
    </div>
    
  
  </>
  
  );
};

export default Card