import React from "react";
import { Fieldset, Input, Button } from "@components/base";
import { TagsStyled, TagStyled } from "./Tags.styles";

type TagsProps = {
  tags: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddInput: (e: any) => void;
  onRemoveInput: (index: number) => void;
};

const Tags: React.FC<TagsProps> = ({
  tags,
  onChange,
  onAddInput,
  onRemoveInput,
}) => {
  return (
    <Fieldset legend="Tags">
      <TagsStyled>
        {tags.map((tag, index) => (
          <TagStyled key={index}>
            <Input
              type="text"
              name={`tags[${index}]`}
              value={tag}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
            />
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                onRemoveInput(index);
              }}
            >
              -
            </Button>
          </TagStyled>
        ))}
        {tags.length === 0 && <p>There is no tag</p>}
        <Button variant="primary" type="button" onClick={onAddInput}>
          +
        </Button>
      </TagsStyled>
    </Fieldset>
  );
};

export default Tags;
