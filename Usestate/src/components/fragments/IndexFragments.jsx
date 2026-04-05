import Links  from "../elements/Link/Links";
export default function IndexFragments(){
    return (
        <>
        <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold text-slate-900">Selamat Datang</h1>
        <p className="text-slate-600">Pilih aksi untuk melanjutkan.</p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
    <Links path={`/register`} color={`bg-sky-200`}>daftar</Links>
    <Links path={`/login`} color={`bg-white`}>login</Links>
        </div>
      </div>
        </>
    )
}