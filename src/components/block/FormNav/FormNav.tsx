import { Button, Badge } from "@components/base";
import { FormNavStyled } from "./FormNav.styles";

const FormNav = ({ id }: { id?: string }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <FormNavStyled>
      <Button variant="light" size="sm" onClick={handleGoBack}>
        Go back
      </Button>
      {id && <Badge variant="light">id : {id}</Badge>}
    </FormNavStyled>
  );
};

export default FormNav;
