import { Flex, Text, Button } from '@radix-ui/themes';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
      </Flex>
      <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger>Open Dialog</DialogPrimitive.Trigger>
      <DialogPrimitive.Content>
        Hello, this is a dialog.
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List>
        <TabsPrimitive.Trigger value="tab1">Tab 1</TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value="tab2">Tab 2</TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content value="tab1">
        Content for Tab 1
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="tab2">
        Content for Tab 2
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger></DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Group>
            <DropdownMenu.Item></DropdownMenu.Item>
            <DropdownMenu.Item></DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    </main>
  );
}
