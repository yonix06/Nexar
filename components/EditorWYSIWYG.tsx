import { RichTextEditor } from '@nextui-org/react';

const EditorWYSIWYG = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <RichTextEditor
      value={value}
      onChange={handleChange}
      placeholder="Écrivez du contenu riche ici..."
    />
  );
};

export default EditorWYSIWYG;