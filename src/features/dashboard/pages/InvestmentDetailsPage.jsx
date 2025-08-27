import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import InvestmentDetailsHeader from '../components/InvestmentDetailsHeader';
import InvestmentDetailsTabs from '../components/InvestmentDetailsTabs';
import InvestmentCalculator from '../components/InvestmentCalculator';
import InvestmentProcessCards from '../components/InvestmentProcessCards';

const InvestmentDetailsPage = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API based on the id
  const investmentData = {
    id: id,
    title: 'Azure Heights Complex',
    location: 'Lekki, Lagos',
    category: 'Development',
    verified: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop',
    description: 'Azure Heights is a premium residential complex situated in the heart of Lekki, featuring modern apartments with high-end finishes, resort-style amenities, and stunning views. The development includes a pool, fitness center, and landscaped gardens in one of Lagos\' most sought-after neighborhoods.',
    expectedROI: '18.5% p.a',
    lockPeriod: '24 months',
    currentInvestors: 142,
    completionDate: 'Dec 2027',
    minInvestment: '₦100,000',
    maxInvestment: '₦2,000,000',
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'auto',
      backgroundColor: '#f8f9fa',
      padding: { xs: 1.5, sm: 2, md: 3 },
      minWidth: 0,
    }}>
      {/* Investment Details Header */}
      <InvestmentDetailsHeader investment={investmentData} />
      
      {/* Investment Details Tabs */}
      <InvestmentDetailsTabs />
      
      {/* Investment Calculator */}
      <InvestmentCalculator investment={investmentData} />
      
      {/* Investment Process Cards */}
      <InvestmentProcessCards />
    </Box>
  );
};

export default InvestmentDetailsPage;
