<<<<<<< HEAD
// Aktifkan PPR di level komponen
import SideNav from "../ui/dashboard/sidenav";

=======
import SideNav from "@/app/ui/dashboard/sidenav";
>>>>>>> parent of 1217c2e (selesai chapter 10)

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
