'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 black text-white">
      <div className="flex w-full max-w-4xl mx-auto mt-8">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, risus a lobortis rhoncus, est est ornare enim, ac feugiat augue massa sed massa. Aliquam odio felis, luctus nec nisi eget, imperdiet pulvinar odio. Phasellus id faucibus mi. Integer ornare gravida arcu, non aliquam lacus tempus id. Nullam rutrum bibendum velit, nec dignissim elit laoreet ut. Maecenas malesuada metus id consequat volutpat. Mauris iaculis sem libero, ut interdum eros viverra ut. Cras ac libero sit amet augue aliquet elementum a ut lacus. In sit amet varius turpis. Mauris malesuada eu magna sed egestas. Cras dapibus ligula quis sapien gravida, id pharetra eros porttitor. Suspendisse facilisis diam non lobortis ornare. Morbi at aliquam ligula, ut semper purus. Integer nec velit rhoncus, pharetra mi sit amet, tristique urna. Nulla mauris dolor, pretium sed scelerisque semper, lobortis vitae purus.
          </p>
        </div>
        <div className="w-1/2 p-4">
          <Image
            src="/images/cover.jpg" // replace with your image path
            alt="About Image"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
}
