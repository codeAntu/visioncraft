export default function Nav() {
  return (
    <div className="flex justify-between items-center border-b border-black dark:bg-white px-5 py-3 text-sm">
      <div className="flex gap-5 items-center">
        <img src="./vercel.svg" alt="" className="aspect-square w-5" />
        <div>Vision Craft </div>
        <div>Explore</div>
        <div>Learn</div>
      </div>
      <div className="flex gap-5 items-center">
        <div>Login </div>
        <div>Sign Up</div>
      </div>
    </div>
  );
}
