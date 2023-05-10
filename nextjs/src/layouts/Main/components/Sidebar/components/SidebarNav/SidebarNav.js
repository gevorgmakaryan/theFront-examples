import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import ThemeModeToggler from 'components/ThemeModeToggler';

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={1}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            href={'/'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Home'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Link
            href={'/404'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'404 example'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Link
            href={'https://thefront.maccarianagency.com/'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Full preview'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Link
            href={'https://thefront.maccarianagency.com/docs/introduction'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Docs'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
