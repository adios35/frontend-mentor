// import{} from
export default function Content() {
  return (
    <div className="py-11  [&>*]:flex-[50%] flex [&>*]:p-11 justify-evenly items-center">
      <div className="images">hello </div>
      <div className="content space-y-3">
        <h3 className="text-md font-semibold text-Orange">sneaker company</h3>
        <h1 className="text-3xl font-bold text-gray-800">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="desc text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          aut quod alias necessitatibus tenetur voluptatum excepturi eius sint
          eaque aperiam.
        </p>
        <div className="price">
          <div className="discount flex gap-2 items-center">
            <span className="font-bold text-gray-700 inline-block text-xl">
              $125.00
            </span>
            <span className="disc font-bold  p-[2px] text-center text-xs rounded-md bg-Pale-orange text-Orange">
              50%
            </span>
          </div>
          <div className="actual-price text-xs text-gray-400">$250.00</div>
        </div>
      </div>
    </div>
  );
}
