import { NavigationButton } from "@/features/ui/components/";

interface RegisterCTAButtonProps {
  label: string;
}
const RegisterCTAButton: React.FC<RegisterCTAButtonProps> = ({ label }) => (
  <NavigationButton path={"/register"}>
    <span className="text-ebony/[56%] text-16 text-align-top leading-24 underline underline-offset-8 decoration-1">
      {label}
    </span>
  </NavigationButton>
);

export default RegisterCTAButton;
