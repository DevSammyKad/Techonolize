import React from 'react';
import { IoClose } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
import pro from '../../assets/lightning.png';
import caseImg from '../../assets/case.png';
import privacy from '../../assets/privacy.png';

const PlanModal = ({ closeModal }) => {
  const planData = [
    {
      name: 'Basic',
      icon: privacy,
      price: 'Free',
      p: 'To discover agent and try them out',
      features: [
        'Unlimited conversations',
        'API Integration',
        'Rechargeable balance',
        'Up to 4 agents',
        'Up to 1,000 messages (one time - 1$)',
      ],
    },
    {
      name: 'Semi-Premium',
      icon: pro,
      p: 'To discover agent and try them out',
      price: '900',
      button: 'Start a-7 days Free trail',
      features: [
        'Unlimited conversations',
        'API Integration',
        'Rechargeable balance',
        'Up to 4 agents',
        'Up to 1,000 messages (one time - 1$)',
      ],
    },
    {
      name: 'Premium ',
      icon: caseImg,
      p: 'To discover agent and try them out',
      price: '1300',
      button: 'Start a-7 days Free trail',
      features: [
        'Unlimited conversations',
        'API Integration',
        'Rechargeable balance',
        'Up to 4 agents',
        'Up to 1,000 messages (one time - 1$)',
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          {' '}
          <div className="bg-white p-10 rounded-2xl ">
            <div className="flex justify-between items-center mb-10 ">
              <h5 className=" font-medium">Upgrade your plan</h5>
              <button
                onClick={closeModal}
                className=" text-gray-600 hover:bg-gray-200 hover:text-gray-800 rounded-full "
              >
                <IoClose size={22} className="" />
              </button>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 relative sm:grid-cols-1">
              {planData.map((item, index) => (
                <div
                  key={index}
                  className={` bg-white p-5 col-span-1 rounded-xl grid border cursor-pointer hover:bg-blue-100 ${
                    item.name === 'Semi-Premium'
                      ? 'border-black bg-blue-50 -mt-10'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h5 className="text-2xl my-3">{item.name}</h5>
                    <img src={item.icon} width={50} alt="" />
                  </div>

                  <p className="text-gray-500 my-2">{item.p}</p>
                  <div className="flex gap-3 items-center ">
                    <p className="text-2xl my-3 text-black font-semibold">
                      ₹{item.price}
                    </p>
                    <p className="text-xl">/Month</p>
                  </div>
                  <button
                    className={`border-2 rounded-xl  my-2 hover:bg-black hover:text-white ${
                      item.button ? 'bg-black text-white' : ''
                    }`}
                  >
                    {item.button
                      ? 'Start a-7 days Free trail'
                      : ' Current Plan'}
                  </button>

                  <ul className="my-10">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 mt-2">
                        <CiCircleCheck className="text-green-600 " size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanModal;
