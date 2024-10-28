'use client';

import Image from 'next/image';

import catImg from '/public/assets/catImg.png';
import useScreenDimensions from '@/hooks/useScreenDimensions';
import Ribbon from './Ribbon';

interface CardProps {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
}

const Card = ({ title, message, totalPrice, freeGift }: CardProps) => {
  const screenDimensions = useScreenDimensions();

  return (
    <>
      {screenDimensions.width > 870 ? (
        <div className="flex flex-row m-auto w-full max-w-[800px] border-2 border-gray-200 rounded-sm">
          {/* Card Image */}
          <Image
            src={catImg}
            alt="Image of a cat on a chair"
            className="w-[50%] rounded-md"
          />

          <div className="p-5 flex flex-col">
            {/* Conditional rendering of Ribbon */}
            {freeGift && (
              <div className="flex justify-end -mr-14 -mt-8">
                <Ribbon />
              </div>
            )}

            {/* Div containing card text and buttons */}
            <h2 className="mt-5 text-xl font-semibold text-green-700 tracking-tight">
              {title}
            </h2>

            <p className="mt-2 lg:pr-14 text-base text-slate-500 tracking-tight">
              {message}
            </p>

            <p className="mt-6 font-semibold text-lg text-slate-600 tracking-tight">
              Total Price: {`£${totalPrice}`}
            </p>

            <div className="flex flex-row space-x-5 w-full mt-14">
              <button className="text-white font-semibold tracking-tight bg-green-700 rounded-md w-full md:w-1/2 h-10 hover:bg-green-800">
                SEE DETAILS
              </button>
              <button className="border-2 text-green-700 font-semibold tracking-tight border-green-700 rounded-md w-full md:w-1/2 h-10 hover:bg-gray-200">
                EDIT DELIVERY
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col m-auto w-full max-w-[600px] border-2 border-gray-200 rounded-sm">
          {/* Card Image */}
          <div className="w-24 h-24 overflow-hidden rounded-full mx-auto -mt-12">
            <Image
              src={catImg}
              alt="Image of a cat on a chair"
              sizes="14"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Div containing card text and buttons */}
          <div className="p-5 flex flex-col text-center">
            <h2 className="text-2xl font-semibold text-green-700 tracking-tight justify-center">
              {title}
            </h2>

            <p className="mt-2 text-base text-slate-500 tracking-tight">
              {message}
            </p>

            <p className="mt-6 font-semibold text-lg text-slate-600 tracking-tight">
              Total Price: {`£${totalPrice}`}
            </p>

            <div className="flex flex-row space-x-5 w-full mt-10 pb-6">
              <button className="text-white font-semibold tracking-tight bg-green-700 rounded-md w-full md:w-1/2 h-10 hover:bg-green-800">
                SEE DETAILS
              </button>
              <button className="border-2 text-green-700 font-semibold tracking-tight border-green-700 rounded-md w-full md:w-1/2 h-10 hover:bg-gray-200">
                EDIT DELIVERY
              </button>
            </div>

            {/* Conditional rendering of Ribbon */}
            {freeGift && (
              <div className="mx-auto mt-4 -mb-10">
                <Ribbon />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
