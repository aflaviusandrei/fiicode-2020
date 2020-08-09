import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import TableRow from './TableRow';
import chevronRight from 'assets/svg/icons/chevronRight.svg';
import chevronLeft from 'assets/svg/icons/chevronLeft.svg';
import downloadIcon from 'assets/svg/icons/download.svg';
import downArrow from 'assets/svg/icons/downArrow.svg';

const TableContainer = styled.div`
    padding: 25px;
    #table-container {
        overflow: auto;
    }
`;

const ChevronDown = styled(downArrow)`
    fill: black;
    font-size: 1em;
`;

const Table = styled.table`
    width: 100%;
    border-radius: 5px;
    margin-top: 30px;
    td {
        text-align: left;
        padding: 0 20px;
    }
    th {
        text-align: center;
    }
    th:hover {
        cursor: pointer;
    }
    .table-action {
        text-align: center;
        display: block;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    tr:nth-child(odd) {
        background-color: ${theme.colors.lightBeige};
    }
    tr:nth-child(even) {
        background-color: ${theme.colors.darkBeige};
    }
`;

const TableControls = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
        justify-flex: end;
    }
    select {
        margin-right: 20px;
    }
    ${media.lg`
        flex-wrap: wrap;
    `}
`;

const Search = styled.input`
    border-radius: 4px;
    padding: 10px;
    border: 1px solid ${theme.colors.lightBeige};
    ${media.lg`
        margin-bottom: 20px;
    `}
`;

const HeadRow = styled.tr`
    height: 50px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
    margin-right: 20px;
    background: white;
    border: 1px solid ${theme.colors.lightBeige};
    border-radius: 4px;
    span {
        margin: auto 0;
        width: 33.3%;
        text-align: center;
    }
    span:first-child {
        border-right: 1px solid ${theme.colors.lightBeige};
        font-weight: bold;
    }
    span:last-child {
        border-left: 1px solid ${theme.colors.lightBeige};
        font-weight: bold;
    }
    span:last-child:hover, span:first-child:hover {
        cursor: pointer;
    }
`;

const CSVButton = styled.button`
    border-radius: 4px;
    min-width: 100px;
    border: 1px solid ${theme.colors.lightBeige};
    padding: 10px;
    background: ${theme.colors.primary};
    color: white;
`;

export default class UsersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rawUsers: JSON.parse(this.props.users),
            displayUsers: JSON.parse(this.props.users),
            sorted: "nume",
            sortype: "asc",
            query: "",
            queriedUsers: [],
            perPage: 5,
            currentPage: 0
        }
    }

    sort = (type) => {
        let sortedUsers = this.state.rawUsers, i, j, order;

        if (this.state.sorted == type) {
            if (this.state.sortype == "asc") order = "desc";
            else order = "asc";
        }

        console.log("sorting in " + order + " order")

        if (order == "asc") sortedUsers.sort();
        else sortedUsers.sort().reverse();

        this.setState({
            displayUsers: sortedUsers,
            sorted: type,
            sortype: order
        })
    }

    search = (e) => {
        let query = document.getElementById("table-search").value;
        let i, j, queries = [];

        for (i = 0; i < this.state.rawUsers.length; i++) {
            let f = false;
            for (let prop in this.state.rawUsers[i]) {
                if (Object.prototype.hasOwnProperty.call(this.state.rawUsers[i], prop)) {
                    let p = this.state.rawUsers[i][prop];
                    if (typeof (this.state.rawUsers[i][prop]) != "string") p = p.toString();
                    query = query.toLowerCase();
                    p = p.toLowerCase();
                    if (p.search(query) != -1) f = true;
                }
            }
            if (f) queries.push(this.state.rawUsers[i]);
        }

        this.setState({
            queriedUsers: queries,
            displayUsers: queries
        })

    }

    repaginate = (e) => {
        this.setState({
            perPage: Number(e.target.value),
            currentPage: 0
        })
    }

    changePage = (type) => {
        let p = Number(this.state.currentPage), a = Number(this.state.perPage);
        let t;
        if (type) t = p - a;
        else t = p + a;
        console.log("Range ", t, " ", t + a);
        if (t < this.state.displayUsers.length && t >= 0) {
            this.setState({
                currentPage: t
            })
        }
    }

    render() {

        let i, j = 0, curPageUsers = [];

        for (i = this.state.currentPage; i < this.state.currentPage + this.state.perPage && i < this.state.displayUsers.length; i++) {
            curPageUsers[j] = this.state.displayUsers[i];
            j++;
        }

        const users = curPageUsers.map((user) =>
            <TableRow user={user} />
        );
        return (
            <TableContainer>
                <h1>Applicants</h1>
                <TableControls>
                    <Search onChange={this.search} placeholder="Search..." id="table-search"></Search>
                    <div>
                        <Pagination>
                            <span onClick={() => this.changePage(1)}>&#60;</span>
                            <span>{(this.state.currentPage / this.state.perPage) + 1}</span>
                            <span onClick={() => this.changePage(0)}>&#62;</span>
                        </Pagination>
                        <select onChange={this.repaginate}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <CSVButton>CSV</CSVButton>
                    </div>
                </TableControls>
                <div id="table-container">
                    <Table>
                        <thead>
                            <HeadRow>
                                <th onClick={() => this.sort("nume")}><span>Nume</span><ChevronDown /></th>
                                <th onClick={() => this.sort("prenume")}><span>Prenume</span><ChevronDown /></th>
                                <th onClick={() => this.sort("mail")}><span>Mail</span><ChevronDown /></th>
                                <th onClick={() => this.sort("telefon")}><span>Telefon</span><ChevronDown /></th>
                                <th onClick={() => this.sort("tricou")}><span>Mărime tricou</span><ChevronDown /></th>
                                <th onClick={() => this.sort("arie")}><span>Arie</span><ChevronDown /></th>
                                <th><span>Actions</span></th>
                            </HeadRow>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </Table>
                </div>
            </TableContainer >
        );
    }
}