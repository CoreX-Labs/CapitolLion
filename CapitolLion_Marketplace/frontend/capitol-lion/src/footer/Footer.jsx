import React from 'react';

import Twitter from './twitter.png'
import Instagram from './insta.png'
import Discord from './discord.png'

const Footer = () => {
  return (
    <React.Fragment>
      <div className='w-full p-6 footerWrap'>
        <div className='p-8 footWrap2'>
          <div className='smallLine mb-9'>
            <hr />
          </div>
          <div className='footContents p-9'>
            <footer class="p-4 sm:p-6">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                  <a href="http://capitolion.vercel.app/" class="flex items-center">
                    <img src="/footerlogo.png" class="mr-3 h-35" alt="lionx logo" />
                  </a>
                </div>
                <div class="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-6 orbitron-light">
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://lionx.one/documents" class="hover:underline">Docs</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://forum.trondao.org/t/the-establishment-of-lionx/2660?u=tashlion" class="hover:underline ">Forum</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://lionx.one/" class="hover:underline">Newsletter</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://sunswap.com/#/scan/detail/TNP1D18nJCqQHhv4i38qiNtUUuL5VyNoC1" class="hover:underline">LDA Token</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://sunswap.com/#/scan/detail/TNP1D18nJCqQHhv4i38qiNtUUuL5VyNoC1" class="hover:underline">Lanchpad</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="text-white">
                      <li class="mb-4">
                        <a href="https://lionxeco.net/" class="hover:text-red">LionX</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="sm:flex sm:items-center sm:justify-between mr">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-6 mt-4 mr-7">© 2022 <a href="https://flowbite.com/" class="hover:underline">Capitol Lion™</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                  <a href="http://localhost:3000/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img src={Discord} alt='discord' />
                    <span class="sr-only">discord pages</span>
                  </a>
                  <a href="http://localhost:3000/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img src={Instagram} alt='instagram' />
                    <span class="sr-only">Twitter page</span>
                  </a>
                  <a href="http://localhost:3000/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img src={Twitter} alt='twitter' />
                    <span class="sr-only">Twitter page</span>
                  </a>

                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;


