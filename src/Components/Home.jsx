import { useLoaderData } from "react-router-dom";
import CoffeeCards from "./CoffeeCards";
import { useState } from "react";

const Home = () => {

      const loaderCoffees = useLoaderData();
      const [newCoffees, setNewCoffees] = useState(loaderCoffees);
      console.log(newCoffees);

      return (
            <div>
                  <h1 className="text-center font-bold text-3xl mb-6">Our Popular Products</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                              newCoffees?.map(coffees => <CoffeeCards
                                    key={coffees._id}
                                    coffees={coffees}
                                    newCoffees={newCoffees}
                                    setNewCoffees={setNewCoffees}
                              ></CoffeeCards>)
                        }
                  </div>
            </div>
      );
};

export default Home;