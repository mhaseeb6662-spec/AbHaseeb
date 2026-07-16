export const AuroraBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`aurora ${className}`}>
      <div className="aurora-blob animate-aurora absolute left-[5%] top-[5%] h-[36vw] w-[36vw] bg-royal/60" />
      <div
        className="aurora-blob animate-aurora absolute right-[8%] top-[15%] h-[30vw] w-[30vw] bg-violet/50"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="aurora-blob animate-aurora absolute bottom-[0%] left-[30%] h-[28vw] w-[28vw] bg-emerald/30"
        style={{ animationDelay: "6s" }}
      />
      <div
        className="aurora-blob animate-aurora absolute bottom-[10%] right-[20%] h-[24vw] w-[24vw] bg-cyan/40"
        style={{ animationDelay: "9s" }}
      />
    </div>
  );
};
