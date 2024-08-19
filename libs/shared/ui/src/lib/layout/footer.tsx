import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        Johann May{" "}
        <a
          className="font-semibold text-gray-600 transition-colors underline-offset-4 hover:underline"
          href="https://github.com/yonix06"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <a
        href="https://www.buymeacoffee.com/yonix06"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-6 py-2 mx-auto mt-2 space-x-2 transition-all duration-75 bg-white border border-gray-200 rounded-lg max-w-fit hover:scale-105"
      >
        <BuyMeACoffee className="w-6 h-6" />
        <p className="font-medium text-gray-600">Du café !</p>
      </a>
    </div>
  );
}
