import React, { FormEvent, KeyboardEvent, useEffect } from "react";
import PropTypes from "prop-types";
import { Chip, ChipProps, styled, TextField } from "@mui/material";
import Downshift from "downshift";

export default function StopSequenceTags() {
  const handleSelecetedTags = React.useCallback((items: string[]) => {
    console.log(items);
  }, [])

  return <TagsInput selectedTags={handleSelecetedTags} fullWidth variant="outlined" id="tags" name="tags" placeholder="" label="" />;
}

const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  height: "100%",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    fontSize: "1rem",
  },
}));

const TagsInput = ({ ...props }) => {
  const { selectedTags, placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState<string[]>([]);

  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);
  
  useEffect(() => {
    selectedTags(selectedItem);
  }, [selectedItem, selectedTags]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement> | React.BaseSyntheticEvent<HTMLInputElement>) => {
    if ((event as KeyboardEvent).key === "Tab") {
      event.preventDefault();
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(event.target.value.trim());

      if (duplicatedValues !== -1) {
        setInputValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue("");

      event.target.focus();
    }

    if (selectedItem.length && !inputValue.length && (event as KeyboardEvent).key === "Backspace") {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  };

  const handleChange = (item: any) => {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }

    setInputValue("");
    setSelectedItem(newSelectedItem);
  };

  const handleDelete = (item: string) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <React.Fragment>
      <Downshift id="downshift-multiple" inputValue={inputValue} onChange={handleChange} selectedItem={selectedItem}>
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, color, size, ref, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
          });
          return (
            <div>
              <TextField
                InputProps={{
                  startAdornment: selectedItem.map((item) => (
                    <StyledChip key={item} tabIndex={-1} label={item} onDelete={handleDelete(item)} />
                  )),
                  onBlur,
                  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    handleInputChange(event);
                    onChange && onChange(event as FormEvent<HTMLInputElement>);
                  },
                  onFocus,
                }}
                variant="standard"
                {...{ ...other, ...inputProps }}
                size="small"
                fullWidth
                sx={{
                  ".MuiInputBase-root": {
                    paddingLeft: 0,
                    display: "flex",
                    flex: "1 1 0%",
                    alignItems: "center",
                    flexWrap: "wrap",
                    overflow: "hidden",
                    padding: "8px 6px",
                    gap: "4px"
                  },
                  ".MuiInputBase-root > input": {
                    display: "flex",
                    flex: "1 1 0%",
                    height: "24px",
                    padding: "0",
                  },
                }}
              />
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
};

TagsInput.defaultProps = {
  tags: [],
};

TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
