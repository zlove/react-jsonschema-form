import React from "react";
import { Button, Icon } from "semantic-ui-react";

function AddButton({label, ...props}) {
    return (
    <Button {...props} icon size="tiny" labelPosition="left">
      <Icon name="plus" />
      {label || 'Add Item'}
    </Button>
  );
}

export default AddButton;
