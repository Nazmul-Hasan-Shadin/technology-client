import {AiFillCar,AiFillCreditCard} from 'react-icons/ai'
import {BsShieldCheck} from 'react-icons/bs'

const Service = ({service}) => {
    const {feature,details,id}=service || {};

  const getIcon = () => {
    switch (id) {
      case 1:
        return <AiFillCar className="text-7xl" />;
        case 2:
            return <AiFillCreditCard className="text-7xl" />;
            case 3:
                return <AiFillCreditCard className="text-7xl" />;
        
      default:
        return <BsShieldCheck className="text-7xl" />;
    }
  };

    return (
        <div  className=''>
            <div className="card dark:border   shadow-xl">
  <figure>
   {getIcon()}
    
    </figure>
  <div className="card-body">
    <h2 className="font-bold text-center"> {feature} </h2>
    <p> {details} </p>
  
  </div>
</div>
        </div>
    );
};

export default Service;