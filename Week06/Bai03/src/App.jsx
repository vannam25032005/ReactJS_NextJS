import DangNhap from "./DangNhap";
import ThongTinHeader from "./ThongTinHeader";
import ThongTinSidebar from "./ThongTinSideBar";

function App() {
  return (
    <div>
      <h1>Auth gia lap</h1>
      <ThongTinHeader />
      <ThongTinSidebar />
      <DangNhap />
    </div>
  );
}

export default App;
