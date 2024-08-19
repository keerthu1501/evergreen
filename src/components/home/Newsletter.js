export default function Newsletter() {
    return (
      <>
          <div className="row justify-content-center">
            <div className="col-lg-10 border rounded p-1">
           
                  <div
                    className="position-relative mx-auto"
                    style={{ maxWidth: "400px" }}
                  >
                    <input
                      className="form-control w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                    >
                    </button>
                  </div>
               
            </div>
          </div>
      </>
    );
  }