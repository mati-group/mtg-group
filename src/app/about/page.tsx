// Copyright (c) 2023 MTG Group. All rights reserved.
import mockservice from '@/mocks/service.json';
export default function Page() {
  return (
    <main className='mx-auto max-w-7xl p-6 lg:px-8'>
      <div>
        <span>
          Thank you for visiting our MaTi Group! We are delighted to be able to introduce ourselves to you. At our core,
          we are a group of passionate individuals committed to providing our customers with the highest standard
          services. Our journey started with a simple goal: to build a brand on which people could rely. Today, we are a
          thriving company that serves customers all over the globe. Our success is a result of our teams dedication and
          hard work, who work tirelessly to ensure that every aspect of our company is first-rate. Whether you are a new
          or returning customer, we welcome you to learn more about us and what we have to offer.
        </span>
      </div>
      <div>
        <ul className='px-10 py-10'>
          {mockservice.map((service, index) => {
            return (
              <li key={index} className='px-10 py-1'>
                {service.name}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
