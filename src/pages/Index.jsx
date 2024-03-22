import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button, Input, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import { FaUpload, FaChartBar, FaChartPie, FaChartLine, FaFilter, FaDownload } from "react-icons/fa";

const sampleData = [
  { id: 1, category: "Sales", revenue: 45000, profit: 8000, month: "Jan" },
  { id: 2, category: "Sales", revenue: 49000, profit: 9500, month: "Feb" },
  { id: 3, category: "Sales", revenue: 57000, profit: 12000, month: "Mar" },
  { id: 4, category: "Marketing", revenue: 24000, profit: 5500, month: "Jan" },
  { id: 5, category: "Marketing", revenue: 28000, profit: 7200, month: "Feb" },
  { id: 6, category: "Marketing", revenue: 34000, profit: 9800, month: "Mar" },
];

const Index = () => {
  const [data, setData] = useState(sampleData);
  const [category, setCategory] = useState();
  const [month, setMonth] = useState();

  const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
  const totalProfit = data.reduce((sum, d) => sum + d.profit, 0);

  const filteredData = data.filter((d) => !category || d.category === category).filter((d) => !month || d.month === month);

  return (
    <Box p={8}>
      <Heading size="xl" mb={8}>
        Business Intelligence Dashboard
      </Heading>

      <Flex mb={8} gap={4} wrap="wrap">
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>${totalRevenue.toLocaleString()}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Profit</StatLabel>
          <StatNumber>${totalProfit.toLocaleString()}</StatNumber>
        </Stat>
      </Flex>

      <Flex mb={8} gap={4} align="center" wrap="wrap">
        <Input type="file" display="none" id="upload" />
        <Button leftIcon={<FaUpload />}>
          <label htmlFor="upload" style={{ cursor: "pointer" }}>
            Upload Dataset
          </label>
        </Button>

        <Select placeholder="Filter by Category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Sales</option>
          <option>Marketing</option>
        </Select>

        <Select placeholder="Filter by Month" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
        </Select>

        <Button leftIcon={<FaFilter />}>Apply Filters</Button>
      </Flex>

      <TableContainer mb={8} border="1px" borderColor={useColorModeValue("gray.200", "gray.700")} borderRadius="md">
        <Table>
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Revenue</Th>
              <Th>Profit</Th>
              <Th>Month</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((d) => (
              <Tr key={d.id}>
                <Td>{d.category}</Td>
                <Td>${d.revenue.toLocaleString()}</Td>
                <Td>${d.profit.toLocaleString()}</Td>
                <Td>{d.month}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex mb={8} gap={4} wrap="wrap">
        <Button leftIcon={<FaChartBar />}>Bar Chart</Button>
        <Button leftIcon={<FaChartPie />}>Pie Chart</Button>
        <Button leftIcon={<FaChartLine />}>Line Chart</Button>
      </Flex>

      <Button leftIcon={<FaDownload />}>Export Data</Button>
    </Box>
  );
};

export default Index;
