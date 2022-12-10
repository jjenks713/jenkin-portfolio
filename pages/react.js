import * as React from 'react';
import { motion } from "framer-motion"
import { getAllReactApps } from '../lib/api';


export default function Javascript({ preview, allReactApps }) {

  const reactApps = allReactApps.data.reactAppsCollection.items

  return (
    <div className="w-full bg-gray-600 flex flex-wrap justify-center sm:p-44">
      {reactApps.map((item) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-10">
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
    </div >
  );
}

export async function getStaticProps({ preview = true }) {
  const allReactApps = (await getAllReactApps(preview)) ?? []
  return {
    props: { preview, allReactApps }
  }
}