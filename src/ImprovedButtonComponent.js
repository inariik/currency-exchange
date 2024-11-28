import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const StyledButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
`;

const ImprovedButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        {isMobile ? 'Открыть/Закрыть' : 'Кнопка'}
      </StyledButton>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen && (
          <div>
            <p>Это содержимое кнопки</p>
            <button onClick={() => setIsOpen(false)}>Закрыть</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ImprovedButtonComponent;