
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div>

        <div>
          <img src={item.image} alt="hh" className="w-64 h-64 "/>
        </div>
        <div>
          <h1 className="text-lg font-bold">{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            
            <p className="font-bold">
                Price: ${item.price}
              </p>
            <div
            onClick={removeFromCart} className="text-4xl cursor-pointer">
            
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
