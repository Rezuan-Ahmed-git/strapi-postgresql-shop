import React from 'react';

const Products = (props) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Products - MyShop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={item?.attributes?.image?.data?.attributes?.url}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.attributes.category}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.attributes.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.attributes.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      'Bearer 01cd05a207cfadec7c59043378f7f0b81868f98c3b8be45ceff8dabd42daf977cd1af397c0df2a5cfdbe59727e4c597018c6b1b043d8e1efbc425ebed0e43e3fa649adaac0f4fbc58b0751e85327cefa75cbfbcb473e7baeaeb86d25a8a37ee4c345c2e96dca2bfae6cbd791db7407d64480e4ed555b82d7351b02fbfc8c8e67',
  };
  let a = await fetch('http://localhost:1337/api/products?populate=*', {
    headers: headers,
  });
  let products = await a.json();
  console.log(products);
  return {
    props: { products: products }, // will be passed to the page component as props
  };
}

export default Products;
