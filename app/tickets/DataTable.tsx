import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Ticket } from '@/lib/generated/prisma'
import React from 'react'

interface Props {
    tickets: Ticket[]
}

function DataTable({tickets}: Props) {
  return (
    <div className='w-full mt-5'>
        <div className="rounded-md sm:border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Title
                        </TableHead>
                        <TableHead>
                            Status
                        </TableHead>
                        <TableHead>
                            Priority
                        </TableHead>
                        <TableHead>
                            Created At
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tickets ? tickets.map((ticket) => (
                        <TableRow className='py-2' key = {ticket.id} data-href="/"> 
                            <TableCell>
                                {ticket.title}
                            </TableCell>
                            <TableCell>
                                {ticket.status}
                            </TableCell>
                            <TableCell>
                                {ticket.priority}
                            </TableCell>
                            <TableCell>
                                {ticket.createdAt.toLocaleDateString("en-US", {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true
                                })}
                            </TableCell>
                        </TableRow>
                    )): null}
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default DataTable