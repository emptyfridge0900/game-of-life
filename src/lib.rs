mod utils;

use wasm_bindgen::prelude::*;
use fixedbitset::FixedBitSet;

// #[wasm_bindgen]
// #[repr(u8)]
// #[derive(Clone, Copy, Debug, PartialEq, Eq)]
// pub enum Cell {
//     Dead = 0,
//     Alive = 1,
// }

#[wasm_bindgen(js_name=Universe)]
pub struct Universe {
    width: u32,
    height: u32,
    cells: FixedBitSet,
}
#[wasm_bindgen(js_class=Universe)]
impl Universe {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Universe {
        let width = 64;
        let height = 64;
        let size = (width * height) as usize;
        let mut cells = FixedBitSet::with_capacity(size);
        for i in 0..size {
            cells.set(i, i % 2 == 0 || i % 7 == 0);
        }


        Universe {
            width,
            height,
            cells,
        }
    }


    pub fn tick(&mut self) {
        let mut next = self.cells.clone();
        

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                next.set(idx, match (cell, live_neighbors) {
                    (true, x) if x < 2 => false,
                    (true, 2) | (true, 3) => true,
                    (true, x) if x > 3 => false,
                    (false, 3) => true,
                    (otherwise, _) => otherwise
                });

            }
        }

        self.cells = next;
    }

    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += self.cells[idx] as u8;
            }
        }
        count
    }
    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    pub fn cells(&self) -> *const usize {
        self.cells.as_slice().as_ptr()
    }

    pub fn set_width(&mut self, width: u32) {
        self.width = width;
        let size = (width * self.height) as usize;
        self.cells = FixedBitSet::with_capacity(size);
        for i in 0..size{
            self.cells.set(i as usize, false);
        }
    }
    pub fn set_height(&mut self, height: u32) {
        self.height = height;
        let size = (self.width * height) as usize;
        self.cells = FixedBitSet::with_capacity(size);
        for i in 0..size{
            self.cells.set(i as usize, false);
        }
    }

    pub fn get_cells(&self)->Vec<usize>{
        self.cells.as_slice().to_vec()
    }

    pub fn set_cell(&mut self,row:u32,col:u32){
            let idx = self.get_index(row, col);
            self.cells.set(idx,true);
    }
    
}
