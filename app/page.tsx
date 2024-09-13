import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import DemoSlider from "./_components/DemoSlider";



const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return ( 
    <div className="flex flex-col items-center">
      <DemoSlider />

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula orci ut libero.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="mt-2">Nulla facilisi. Sed eget neque nec lectus fermentum dapibus in non felis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
