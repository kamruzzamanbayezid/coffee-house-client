import Swal from "sweetalert2";

const AddCoffee = () => {

      const handleAddCoffee = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const details = form.details.value;
            const category = form.category.value;
            const photo = form.photo.value;

            const newCoffee = { name, supplier, chef, taste, details, category, photo };
            console.log(newCoffee);

            fetch('http://localhost:7000/coffees', {
                  method: 'POST',
                  headers: {
                        "content-type": 'application/json'
                  },
                  body: JSON.stringify(newCoffee)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire(
                                    'Good job!',
                                    'Your Coffee Added Successfully!',
                                    'success'
                              )
                        }
                  })
      }

      return (
            <div className="bg-[#F4F3F0] p-20">

                  <h1 className="text-2xl font-bold text-center mb-5">Add New Coffee!</h1>
                  <form onSubmit={handleAddCoffee}>
                        {/* form name & chef row */}
                        <div className="md:flex md:gap-5 mb-5">
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                                    </label>
                              </div>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="chef" placeholder="chef name" className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>
                        {/* form supplier & taste row */}
                        <div className="md:flex md:gap-5 mb-5">
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="supplier" placeholder="supplier name" className="input input-bordered w-full" />
                                    </label>
                              </div>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Taste</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="taste" placeholder="coffee taste" className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>
                        {/* form category & details row */}
                        <div className="md:flex md:gap-5 mb-5">
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="category" placeholder="coffee category" className="input input-bordered w-full" />
                                    </label>
                              </div>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name="details" placeholder="coffee details" className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>
                        {/* form photo row */}
                        <div className="mb-5">
                              <div className="form-control ">
                                    <label className="label">
                                          <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="photo_URL" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
                                    </label>
                              </div>

                        </div>

                        <input type="submit" value="Add Coffee" className="btn btn-block btn-neutral mt-4" />
                  </form>

            </div>
      );
};

export default AddCoffee;