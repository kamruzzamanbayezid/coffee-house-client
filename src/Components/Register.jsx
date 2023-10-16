import { useContext } from "react";
import { AuthContent } from "./AuthProvider";

const Register = () => {

      const { createUser } = useContext(AuthContent);

      const handleRegister = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value

            createUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        // express || mongoDB
                        const creationTime = result.user.metadata.creationTime
                        const user = { email, creationTime, name }

                        fetch('http://localhost:7000/users', {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(user),
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                          alert('User created Successfully')
                                    }
                              })
                  })
                  .catch(error => console.log(error))

      }

      return (
            <div>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content">
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleRegister} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Register</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;