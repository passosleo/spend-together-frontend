import { LoaderCircle, SearchIcon } from "lucide-react";
import { CustomInput, InputProps } from "../custom-input";
import { When } from "../when";

type CustomSearchInputProps<T> = InputProps & {
  isLoading?: boolean;
  searchResults: T[];
  renderResults: (result: T, index: number) => React.ReactNode;
};

export function CustomSearchInput<T>({
  isLoading,
  leftElement,
  rightElement,
  type = "text",
  autoCapitalize = "none",
  placeholder = "Buscar",
  inputMode = "search",
  searchResults = [],
  renderResults,
  ...props
}: CustomSearchInputProps<T>) {
  const hasResults = searchResults.length > 0;
  return (
    <div>
      <CustomInput
        {...props}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        inputMode={inputMode}
        type={type}
        leftElement={leftElement || <SearchIcon size={18} />}
        rightElement={
          rightElement || (
            <When condition={isLoading}>
              <LoaderCircle className="animate-spin" />
            </When>
          )
        }
      />
      <When condition={hasResults}>
        <div className="border-b border-x border-input rounded-b-lg cursor-pointer mt-[-28px] z-50 pt-3 shadow-lg">
          {searchResults.map((result, index) => (
            <div key={index}>{renderResults(result, index)}</div>
          ))}
        </div>
      </When>
    </div>
  );
}
