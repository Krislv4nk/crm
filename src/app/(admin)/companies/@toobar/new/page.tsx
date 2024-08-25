'use client';

import React from 'react';
import CompanyForm, { CompanyFieldValues } from '@/app/components/company-form';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={function (values: CompanyFieldValues): void | Promise<void> {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
} 