import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
        <Navbar/>
        
    <div className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 bg-gray-50">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center">
        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Understanding Sleep Disorders
        </h1>
        <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600">
          Our project focuses on detecting and analyzing various sleep disorders using deep learning techniques.
        </p>
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Insomnia</h3>
            <p className="mt-4 text-base text-gray-600">
              A disorder causing difficulty falling or staying asleep, leading to fatigue and concentration issues.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Sleep Apnea</h3>
            <p className="mt-4 text-base text-gray-600">
              A disorder causing breathing to stop and start while you sleep. It can prevent your body from getting enough oxygen.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Nocturnal Frontal-Lobe Epilepsy</h3>
            <p className="mt-4 text-base text-gray-600">
              A rare condition where seizures occur during sleep, causing sudden movements and disturbances.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900">Narcolepsy</h3>
                <p className="mt-4 text-base text-gray-600">A neurological disorder that disrupts sleep-wake cycles, causing excessive daytime sleepiness and sudden sleep attacks.</p>
          </div>

           <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900">REM Sleep Behavior Disorder</h3>
                <p className="mt-4 text-base text-gray-600">A condition where individuals physically act out vivid dreams due to disrupted muscle paralysis during REM sleep.</p>
           </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900">Periodic Leg Movement Disorder</h3>
                <p className="mt-4 text-base text-gray-600">A sleep disorder causing repetitive leg movements during sleep, leading to frequent awakenings and poor sleep quality.</p>
            </div>

        </div>
      </div>
    </div>
    <div className="mt-8"></div>
    </div>
    
    
    );
};

export default About;
