import { useEffect, useState } from 'react';

import { Box, IconButton } from '@chakra-ui/react';

import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <Box position="fixed" zIndex={5} bottom={20} right={5}>
      {isVisible && (
        <IconButton
          aria-label="go-up"
          onClick={scrollToTop}
          rounded="md"
          icon={<ArrowUpIcon boxSize={'25px'} />}
          size="sm"
          colorScheme="primary"
        />
      )}
    </Box>
  );
};

export default ScrollTop;
