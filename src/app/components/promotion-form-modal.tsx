'use client';

import React from 'react';
import Modal, { ModalProps } from '@/app/components/modal';
import PromotionForm from './promotion-form';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
