import { SearchIcon } from "./components/icons";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-[40%]">
        <div className="p-10">
          {/* pencarian kota */}
          <form action="">
            <div className="flex bg-gray-100 justify-between w-[60%] p-3 rounded-lg">
              <input
                placeholder="cari kota..."
                type="text"
                className="w-[90%] outline-none"
              />
              <button type="submit" className="icon">
                <SearchIcon />
              </button>
            </div>
          </form>
          {/* .pencarian kota */}
        </div>
      </div>
      <div className="w-[60%]">Konten kanan</div>
    </div>
  );
}
