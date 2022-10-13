import React, { useState } from 'react';
import {Forma,Title,Input,Button}from './SingInUp.style';
export const Form = ({title,handleClick,isname}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
  return (
    <Forma className='container--signUp'>
        <Title>{title}</Title>

         <Input
        type={isname}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        
    />
    <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
    />
    <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
    />
    <Button
        onClick={() =>handleClick(email, password,name) 
        }
    >
        {title}
    </Button>
</Forma>
  );
};

////////

