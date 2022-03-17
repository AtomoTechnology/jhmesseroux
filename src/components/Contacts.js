import avatar from './../images/hilaire.png';

const Contacts = () => {
  return (
    <section className="contacts my-8">
      <div className="container">
        <div className="contact-box p-8 flex flex-col sm:flex-row justify-around items-center  shadow-md rounded-sm bg-white">
          <div className="img shadow-md rounded-full bg-gray-100 border-gray-200">
            <img src={avatar} width="170" alt="JHMesseroux" />
          </div>
          <form action="">
            <h3 className="my-4 text-2xl text-gradient">Contact US</h3>
            <fieldset className="flex gap-0 p-0 m-0">
              <label>Name | Company </label>
              <input type="text" placeholder="Name or Company's name " name="name" />
              <button className="btn btn-yellow text-white font-bold"> Contact</button>
            </fieldset>
            <span className="text-sm text-gray-900 ">Leave your data and we'll contac you later...</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
