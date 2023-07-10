const fs = require('fs');
const path = require('path');
const { capitalize } = require('lodash');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const capitalizedComponentName = capitalize(componentName);
const componentPath = path.join('src', 'components', capitalizedComponentName);

if (fs.existsSync(componentPath)) {
  console.error(`Component "${capitalizedComponentName}" already exists.`);
  process.exit(1);
}

// Crea la carpeta del componente si no existe
fs.mkdirSync(componentPath, { recursive: true });

const componentFiles = [
  {
    fileName: 'index.ts',
    content: `export { default } from "./${capitalizedComponentName}";\n`,
  },
  {
    fileName: `${capitalizedComponentName}.tsx`,
    content: `import React from 'react';
  
  const ${capitalizedComponentName}: React.FC = () => {
    return (
      <div>
        {/* Component implementation */}
      </div>
    );
  };
  
  export default ${capitalizedComponentName};\n`,
  },
  {
    fileName: `${capitalizedComponentName}.types.ts`,
    content: `// Type definitions for the ${capitalizedComponentName} component
  
  interface ${capitalizedComponentName}Props {
    // Props type definition
  }
  
  export default ${capitalizedComponentName}Props;\n`,
  },
  {
    fileName: `${capitalizedComponentName}.test.tsx`,
    content: `import React from 'react';
  import { render } from '@testing-library/react';
  import ${capitalizedComponentName} from './${capitalizedComponentName}';
  
  describe('${capitalizedComponentName}', () => {
    it('should render without errors', () => {
      render(<${capitalizedComponentName} />);
      // Add your test assertions here
    });
  });\n`,
  },
  {
    fileName: `${capitalizedComponentName}.styles.ts`,
    content: `import styled from 'styled-components';
  import  ${capitalizedComponentName}Props  from './${capitalizedComponentName}.types';
  
  export const Styled${capitalizedComponentName} = styled.button<${capitalizedComponentName}Props>\`
    // Component styles
  \`;\n`,
  },
  {
    fileName: `${capitalizedComponentName}.stories.tsx`,
    content: `  import React from 'react';
    import { Meta, Story } from '@storybook/react';
    import ${capitalizedComponentName} from './${capitalizedComponentName}';
  
    export default {
      component: ${capitalizedComponentName},
      title: 'Librerizky/${capitalizedComponentName}',
      argTypes: {},
    } as Meta;

    export const Primary: Story = (args) => <${capitalizedComponentName} {...args} />;
    Primary.args = {
      label: '${capitalizedComponentName}',
      primary: true,
    };`,
  },
];

componentFiles.forEach(({ fileName, content }) => {
  const filePath = path.join(componentPath, fileName);
  fs.writeFileSync(filePath, content);
  console.log(`File ${fileName} created`);
});

// Actualiza el archivo src/components/index.ts
const indexPath = path.join('src', 'components', 'index.ts');
const indexFileContent = fs.readFileSync(indexPath, 'utf-8');

const updatedIndexFileContent = `${indexFileContent.trimRight()}\nexport { default as ${capitalizedComponentName} } from "./${capitalizedComponentName}/${capitalizedComponentName}";`;

fs.writeFileSync(indexPath, updatedIndexFileContent);

console.log(`Component "${capitalizedComponentName}" created successfully.`);
