function Contact(){
    return(
        <>
  <section className="text-dark py-5">
      <div className="col-7 mx-auto px-5 py-5">
        <div className="text-center mb-4">
          <h1 className="display-4 font-weight-bold mb-4 ">
            Contact Us
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: '66%' }}>
          Reach out to us for any <span className="span1 p-1"> inquiries</span> or support
          </p>
        </div>
        <div className="row mx-auto">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <div className="col-12 mb-3 text-center">
            <button className="btn  btn1">Submit</button>
          </div>
      
        </div>
      </div>
    </section>

        </>
    )
}
export default Contact;