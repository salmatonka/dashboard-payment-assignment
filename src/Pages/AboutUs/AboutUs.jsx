import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Wedding House | AboutUs</title>
      </Helmet>

      <div className='py-24'>
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://d1tntvpcrzvon2.cloudfront.net/vpassets/_next/static/images/GridItem4-01cef4ba66a3dcaf84e61974cd40eeb8.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                <h3 className="text-3xl font-bold">Personalize your website with a video and a custom URL</h3>
                <p className="my-6 dark:text-gray-600">Extra touches to make your wedding website even more unique.</p>
                <button type="button" className="self-start">Action</button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://d1tntvpcrzvon2.cloudfront.net/vpassets/_next/static/images/GridItem2-1165cb4aea65c3dfe39453a187358790.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                <h3 className="text-3xl font-bold">Websites loved by couples and guests</h3>
                <p className="my-6 dark:text-gray-600">It's the easiest way to keep guests updated and for them to RSVP and shop your registry.</p>
                <button type="button" className="self-start">Action</button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img src="https://d1tntvpcrzvon2.cloudfront.net/vpassets/_next/static/images/GridItem2-1165cb4aea65c3dfe39453a187358790.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                <h3 className="text-3xl font-bold">Match your wedding invitations and save the dates</h3>
                <p className="my-6 dark:text-gray-600">Whatever your style, our websites are made to match your invites and more.</p>
                <button type="button" className="self-start">Action</button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs
