import * as React from 'react';
import { motion } from 'framer-motion';
import { getAllJsApps } from '../lib/api';


export default function Javascript({ preview, allJsApps }) {

  const jsApps = allJsApps.data.jsAppsCollection.items


  return (
    <div className='bg-gray-600 flex flex-wrap justify-center sm:p-44'>
      {jsApps.map((item) => (
        <>
          <div className="card w-96 shadow-xl image-full m-10">
            <figure><img src={item.image.url} alt="Shoes" /></figure>
            <div className="card-body bg-black/30">
              <h2 className="card-title text-white">{item.title}</h2>
              <p className='text-white'>{item.description}</p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="card-actions justify-end">
                <a href={item.link} target="_blank" rel="noreferrer" className="btn glass text-white">Checkout App</a>
              </motion.div>
            </div>
          </div>
        </>

      ))}
    </div>
  );
}

export async function getStaticProps({ preview = true }) {
  const allJsApps = (await getAllJsApps(preview)) ?? []
  return {
    props: { preview, allJsApps }
  }
}

