export default function StatCard({ title, value, outerColorClass, innerColorClass, valueClass = "" }) {
  return (
    <div className="h-48 rounded-2xl bg-gray-900/50 border border-gray-800 p-6 flex flex-col justify-between">
       <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${outerColorClass}`}>
          <div className={`w-4 h-4 rounded-full ${innerColorClass}`}></div>
       </div>
       <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className={`text-2xl font-semibold ${valueClass}`}>{value}</p>
       </div>
    </div>
  );
}
