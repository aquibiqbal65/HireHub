import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>List of Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1 ,2 ,3, 4].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>17-07-24</TableCell>
                            <TableCell>Senior Software Engineer</TableCell>
                            <TableCell>XYZ Corp</TableCell>
                            <TableCell className="text-right"> <Badge>Interview Scheduled</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobsTable