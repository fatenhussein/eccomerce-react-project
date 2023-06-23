import { useState, useRef } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';

export default function Quantity() {
  const [value, setValue] = useState(1);
  const handlers = useRef();

  return (
    <Group spacing={5}>
      <ActionIcon
        size={25}
        variant='default'
        onClick={() => handlers.current.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={1}
        step={1}
        styles={{
          input: { width: rem(40), textAlign: 'center' },
        }}
      />

      <ActionIcon
        size={25}
        variant='default'
        onClick={() => handlers.current.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
}
