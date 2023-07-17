import React, { useRef } from 'react';
import { useChatBox } from '@/components/ChatBox';
import { ChatItemType } from '@/types/chat';
import { Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';
import MyIcon from '@/components/Icon';

const ToolMenu = ({ history }: { history: ChatItemType[] }) => {
  const { onExportChat } = useChatBox();
  const menuList = useRef([
    {
      icon: 'shareLight',
      label: '分享对话',
      onClick: () => {}
    },
    {
      icon: 'apiLight',
      label: 'HTML导出',
      onClick: () => onExportChat({ type: 'html', history })
    },
    {
      icon: 'markdown',
      label: 'Markdown导出',
      onClick: () => onExportChat({ type: 'md', history })
    },
    { icon: 'pdf', label: 'PDF导出', onClick: () => onExportChat({ type: 'pdf', history }) }
  ]);
  return (
    <Menu autoSelect={false} isLazy>
      <MenuButton
        _hover={{ bg: 'myWhite.600  ' }}
        cursor={'pointer'}
        borderRadius={'md'}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MyIcon name={'more'} w={'14px'} p={2} />
      </MenuButton>
      <MenuList color={'myGray.700'} minW={`120px !important`} zIndex={10}>
        {menuList.current.map((item) => (
          <MenuItem key={item.label} onClick={item.onClick} py={[2, 3]}>
            <MyIcon name={item.icon as any} w={['14px', '16px']} />
            <Box ml={[1, 2]}>{item.label}</Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ToolMenu;