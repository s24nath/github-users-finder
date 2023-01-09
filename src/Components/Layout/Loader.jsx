import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <div className="w-100 mt-20">
      <img src={loader} alt="" width={180} className="text-center mx-auto" />
    </div>
  );
};

export default Loader;
